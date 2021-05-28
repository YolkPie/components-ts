# source /home/admin/tags
# jdos 容器服务里，分组的高级配置中，可以查看到，前提是使用dockerfile构建
source /home/admin/parameters

# echo "$__ROOT_PASSWORD__"|passwd --stdin root
# echo "$__ADMIN_PASSWORD__"|passwd --stdin admin

function echo_trace()
{
    echo "[`date '+%Y-%m-%d %H:%M:%S'`]$@"
}

function echo_parameters()
{
    echo_trace "project_name:" ${ossurl}
    echo_trace "online_type:" ${online_type}
    echo_trace "deploy_path:" ${deploy_path}
}

function execshell()
{
    echo "[`date +'%Y-%m-%d %H:%M:%S'`] [execshell]$@ begin."
    eval $@
    [[ $? != 0 ]] && {
        echo "[`date +'%Y-%m-%d %H:%M:%S'`] [execshell]$@ failed."
        exit 1
    }
    echo "[`date +'%Y-%m-%d %H:%M:%S'`] [execshell]$@ success."
    return 0
}

function abnormal_exit()
{
    echo $@
    echo "[FATAL]$@" >> $ERROR_INFO
    exit 1
}

function record_error_info()
{
    echo "[FATAL]$@" >> $ERROR_INFO
}

function trap_exit()
{
    trap "exit_procprocess $@" 0
}
trap_exit

function exit_procprocess()
{
    local ret=$?
    kill -9 `pstree $$ -p|awk -F"[()]" '{for(i=1;i<=NF;i++)if($i~/[0-9]+/)print $i}'|grep -v $$` 2>/dev/null
    [[ -f $ERROR_INFO ]] && ret=1
    cat $ERROR_INFO 2>/dev/null
    exit $ret
}

function download_package()
{
    BIN_PATH=${ossurl}
    echo_trace "package_path:" ${BIN_PATH}
    # 删除部署目录，防止解压部署文件时，因需交互而无法部署
    /bin/rm -rf ${deploy_path}
    mkdir -p ${deploy_path}
    cd ${deploy_path}
    echo_trace "curl:"
    #wget -q -t 10 --limit-rate=10M $BIN_PATH -O online.tgz >/dev/null
	wget -q -t 10 --limit-rate=10M $BIN_PATH -O online.zip >/dev/null
}

function unzip_package()
{
    echo_trace "Unzipping package..."
    mkdir -p /export/Logs/servers/nginx/logs/
    mkdir -p /dev/shm/nginx_temp/client_body
    cd ${deploy_path}
    #tar -xf online.tgz -C ${deploy_path} --strip-components=1
    #/bin/rm -rf online.tgz
	#mkdir -p /home/export/App
	#unzip -d /home/export/App/ ${deploy_path}/*.zip && echo 1 > /home/admin/app_info
	#cp -rf /home/export/App/deploy ${deploy_path}/
	unzip -d  ${deploy_path}  online.zip
    /bin/rm -rf online.zip
    ls -all
}

function start_nginx()
{
    /usr/sbin/sshd
    /usr/sbin/crond
    ls -l /export/ 
    
    if [ -f /home/admin/nginx.conf ];then
       cp /home/admin/nginx.conf /opt/nginx/conf/domains/
    fi
    echo_trace "Starting Nginx"
    /etc/init.d/nginx start
}

echo_parameters
execshell "download_package"
execshell "unzip_package"
execshell "start_nginx"
echo_trace "JDOS_DOCKER_SERVICE_STARTED"
echo_trace "All Finished !"
sleep 9999999d
exit 0
