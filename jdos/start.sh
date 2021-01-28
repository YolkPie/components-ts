#! /bin/bash

# 如果需要将你的文件复制到指定目录
cp -r ../storybook-static /export/Data/ #使用相对路径     cp -r /export/App/resource /export/Data/ # 使用绝对路径

# 如果需要替换nginx文件
#rm -rf /export/servers/nginx/conf/nginx.
mkdir -p /dev/shm/nginx_temp/client_body
cp ../nginx.conf /export/servers/nginx/conf/domains # 使用相对目录   cp /export/App/nginx.conf /export/servers/nginx/conf/

# 如果使用到nginx需要启动nginx，不要reload，因为nginx默认是不启动的，需要使用sudo执行
sudo /export/servers/nginx/sbin/nginx -c /export/servers/nginx/conf/nginx.conf
