# sunflower
Nuxt + PHP + MySQL + TypeScriptをごちゃ混ぜに使った学習用Webアプリ

## コンテナの起動方法

- **laradock**

Laravelの本体コンテナ

```
$ docker-compose up -d mysql nginx phpmyadmin  // この３つで必ず指定すること、そうでないと他のコンテナまで作られてしまう

$ docker-compose ps
           Name                          Command               State                                                              Ports                                                           
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
laradock_docker-in-docker_1   dockerd-entrypoint.sh            Up      2375/tcp, 2376/tcp                                                                                                         
laradock_mysql_1              docker-entrypoint.sh mysqld      Up      0.0.0.0:3306->3306/tcp, 33060/tcp                                                                                          
laradock_nginx_1              /bin/bash /opt/startup.sh        Up      0.0.0.0:443->443/tcp, 0.0.0.0:80->80/tcp, 0.0.0.0:81->81/tcp                                                               
laradock_php-fpm_1            docker-php-entrypoint php-fpm    Up      9000/tcp                                                                                                                   
laradock_phpmyadmin_1         /docker-entrypoint.sh apac ...   Up      0.0.0.0:8089->80/tcp                                                                                                       
laradock_workspace_1          /sbin/my_init                    Up      0.0.0.0:2222->22/tcp, 0.0.0.0:3000->3000/tcp, 0.0.0.0:3001->3001/tcp, 0.0.0.0:4200->4200/tcp, 0.0.0.0:8001->8000/tcp,      
                                                                       0.0.0.0:8080->8080/tcp 
```
コンテナに入ってからmigrate実行

```
$ docker-compose exec workspace bash
root@xxxxxxxxxxxx:/var/www# 
root@xxxxxxxxxxxx:/var/www# cd rose/
root@xxxxxxxxxxxx:/var/www# php artisan migrate
```

- **rose (薔薇)**

Laravel製のRestAPIリソース

// "laradock_workspace_1"がここのリソースに該当する

- **peony (牡丹)**

TypeScript製のRestAPIリソースとコンテナ

```
$ docker-compose up -d peony

$ docker-compose ps
Name             Command            State                Ports              
----------------------------------------------------------------------------
peony   docker-entrypoint.sh node   Up      0.0.0.0:8094->8080/tcp, 8094/tcp

$ docker-compose exec peony bash
root@xxxxxxxxxxxx:/app#

root@xxxxxxxxxxxx:/app# npm install  // node_moduleはgitに含めていないので、初回はモジュールのインストールを行う
...
root@xxxxxxxxxxxx:/app# npm run ts-node-dev index.ts
> peony@1.0.0 ts-node-dev /app
> ts-node-dev --respawn "index.ts"

Using ts-node version 8.10.2, typescript version 3.9.7
Example app listening on port 8080!

// ここまで来れば成功
```

- **wisteria （藤）**

Nuxt製のViewリソースとコンテナ

```
$ docker-compose up -d nuxt

$ docker-compose ps
Name            Command            State                Ports              
---------------------------------------------------------------------------
nuxt   docker-entrypoint.sh node   Up      0.0.0.0:8090->8080/tcp, 8090/tcp

$ docker-compose exec nuxt bash

root@xxxxxxxxxxxx:/app#

root@xxxxxxxxxxxx:/app# npm install  // node_moduleはgitに含めていないので、初回はモジュールのインストールを行う
...
root@xxxxxxxxxxxx:/app# npm run dev
```
