#Dockerfile文件
FROM node
# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service
# Bundle app source
COPY dist/ /home/Service
EXPOSE 3000
CMD [ "node", "koa2_mongoose_demo.js" ]
