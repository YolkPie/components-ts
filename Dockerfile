FROM base_image
ADD . /home/
WORKDIR /home
ENTRYPOINT /usr/sbin/sshd && mkdir -p /export/logs && mkdir -p /dev/shm/nginx_temp/client_body && nginx -c /opt/nginx/conf/nginx.conf  && sleep 9999999d

# && NODE_ENV=production pm2 startOrRestart /home/bin/start.json && sleep 9999999d
