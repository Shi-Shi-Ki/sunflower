# sunflower
Nuxt + PHP + MySQL + TypeScriptをごちゃ混ぜに使った学習用Webアプリ

## コンテナの起動方法

- **laradock**

Laravelの本体コンテナ

```
$ docker-compose up -d mysql nginx phpmyadmin
// この３つで必ず指定すること、そうでないと他のコンテナまで作られてしまうので注意
// 初回は少々時間がかかる...
...

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

nginxの設定は以下のディレクトリに含まれる

```
$ ll laradock/nginx/sites/
...
-rw-r--r--   1 User  staff  1189  8 14 21:10 pj01_rose.conf
...
```

コンテナが無事に作成できたら、以下の設定を行う

```
1: databaseの作成
2: migrateの実行
3: ホスト側のhostsの設定
```

1: databaseの作成  
  
// rootユーザの接続情報は**laradock**の.envを参照  
// laradockユーザの接続情報は**rose**の.envを参照

```
$ docker-compose exec mysql bash

root@xxxxxxxxxxxx:/#

root@xxxxxxxxxxxx:/# mysql -u root -proot
...

mysql> grant select,update,delete,create,drop,index,alter,insert on *.* to 'laradock'@'%';
// アプリで使用する"laradock"ユーザの権限を設定（例は最低限必要な権限）

mysql> exit

mysql> mysql -u laradock -psecret
...

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| laradock           |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

mysql> create database rose;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| laradock           |
| mysql              |
| performance_schema |
| rose               | // OK
| sys                |
+--------------------+
```

2: migrate実行  
// **必ず1:の後で行うこと**

```
$ docker-compose exec workspace bash

root@xxxxxxxxxxxx:/var/www# 

root@xxxxxxxxxxxx:/var/www# cd rose/

root@xxxxxxxxxxxx:/var/www# composer install
...
root@xxxxxxxxxxxx:/var/www# php artisan migrate
...
```
"oauth_*"というテーブルが作られるので、これらも作成されていればOK!

3: ホスト側のhostsの設定  
// コマンドはmacで行った時の物

```
$ sudo vi /private/etc/hosts

// 以下を追加する
~ ここから ~
127.0.0.1   rose.local
::1         rose.local
~ ここまで ~
```

4: keyの発行

API認証用のキーを発行する。

```
# php artisan passport:install
Encryption keys generated successfully.
Personal access client created successfully.
Client ID: 1
Client secret: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Password grant client created successfully.
Client ID: 2
Client secret: yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```
"oauth_clients"にこれらのキー情報がinsertされていればOK!

5: token発行

//todo

6: API接続テスト

//todo

- **rose (薔薇)**

Laravel製のRestAPIリソース  

// "laradock_workspace_1"がここのリソースに該当する  
// 直接"rose"ディレクトリのリソースを編集しても良い

APIリストはartisanで確認

```
root@xxxxxxxxxxxx:/var/www/rose# php artisan route:list
+--------+-----------+----------------------+-----------------+----------------------------------------------------+------------+
| Domain | Method    | URI                  | Name            | Action                                             | Middleware |
+--------+-----------+----------------------+-----------------+----------------------------------------------------+------------+
|        | GET|HEAD  | /                    |                 | Closure                                            | web        |
|        | GET|HEAD  | api/memos            | memos.index     | App\Http\Controllers\Api\MemosController@index     | api        |
|        | POST      | api/memos            | memos.store     | App\Http\Controllers\Api\MemosController@store     | api        |
|        | GET|HEAD  | api/memos/{memo}     | memos.show      | App\Http\Controllers\Api\MemosController@show      | api        |
|        | PUT|PATCH | api/memos/{memo}     | memos.update    | App\Http\Controllers\Api\MemosController@update    | api        |
|        | DELETE    | api/memos/{memo}     | memos.destroy   | App\Http\Controllers\Api\MemosController@destroy   | api        |

~ 中略 ~

+--------+-----------+----------------------+-----------------+----------------------------------------------------+------------+
```

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

root@xxxxxxxxxxxx:/app# npm install
// node_moduleはgitに含めていないので、初回はモジュールのインストールを行う
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
$ docker-compose up -d wisteria

$ docker-compose ps
Name            Command            State                                Ports                          
-------------------------------------------------------------------------------------------------------
wisteria   docker-entrypoint.sh node   Up      0.0.0.0:8090->8080/tcp, 0.0.0.0:8091->8081/tcp, 8090/tcp

$ docker-compose exec wisteria bash

root@xxxxxxxxxxxx:/app#

root@xxxxxxxxxxxx:/app# npm install
// node_moduleはgitに含めていないので、初回はモジュールのインストールを行う
...
root@xxxxxxxxxxxx:/app# npm run dev
```

laradockコンテナ群とwisteria(nuxt)コンテナが無事に起動ができたら、以下のURLにアクセスするとアプリを確認することができる  
http://0.0.0.0:8090/memo

storybookへのアクセス  
http://0.0.0.0:8091/

## トラブルシューティング

### docker系

- **pullしてリソースを更新したがコンテナが上手く起動しなくなった場合**

どうにも動かないなら完全にクリアして作り直すと良い。  
＊コンテナごと消えるのでパッケージの再インストールも忘れずに

ex) roseコンテナ
```
$ docker-compose down --remove-orphans
...
$ docker-compose up -d --build mysql nginx phpmyadmin
```

### roseコンテナ

- **artisanでエラーになる場合**

```
root@xxxxxxxxxxxx:/var/www/rose# php artisan route:list
PHP Fatal error:  Uncaught Error: Class 'Illuminate\Foundation\Application' not found in /var/www/rose/bootstrap/app.php:14
Stack trace:
#0 /var/www/rose/artisan(20): require_once()
#1 {main}
  thrown in /var/www/rose/bootstrap/app.php on line 14
```

このエラーが出た場合はcomposerでinstallを行うと、artisanが使えるようになる。
一度コンテナを作り直したりすると発生する可能性がある。

```
root@xxxxxxxxxxxx:/var/www/rose# composer install
Loading composer repositories with package information
Updating dependencies (including require-dev)

Package operations: 101 installs, 0 updates, 0 removals
  - Installing voku/portable-ascii (1.5.3): Downloading (100%)

~ 中略（インストールまで少し時間がかかる） ~

Package manifest generated successfully.
```
