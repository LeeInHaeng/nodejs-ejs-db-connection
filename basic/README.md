Vanila Javascript ( not jquery )

# NodeJS ��� ���
- npm init
- npm install --save express
- npm install --save socket.io
- npm install --save fs
- npm install --save body-parser
- npm install --save mysql

# MySQL ���ڵ� ���
- mysql Charset/Collation
- utf8mb4 / utf8mb4_unicode_ci

# MySQL Local ���� �� Error 
- Message : Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested - by server; consider upgrading MySQL client

- �ذ� : ALTER USER ��root��@��localhost�� IDENTIFIED WITH mysql_native_password BY ��������н����塯;

# ������ �� ��
- 1) ejs�� �̿��� ���� ������ ���� html �����