# jdos构建时使用的基础镜像，
# 注意:镜像中/export/目录比较特殊 构建过程中会被清空，
#     所以在镜像中安服务器不要安装在此目录下：
#     镜像other-jd-centos6.6-work0829的nginx就安装到了export目录下，所以不能使用
FROM jdos_base/jd-new-centos6-nginx:latest


RUN  cat /home/admin/start_container.sh; cat /home/admin/clean_export.sh
#RUN  echo "ls -l /export/" > /home/admin/clean_export.sh
RUN  mkdir -p /home/admin/front/
ADD  docker/docker_start.sh /home/admin/front/
ADD  docker/nginx.conf /home/admin/
RUN  chmod a+x /home/admin/front/docker_start.sh
ENTRYPOINT ["/home/admin/front/docker_start.sh"]