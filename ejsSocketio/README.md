# npm ���
- npm install -g express-generator
- express --ejs ������Ʈ��
- cd ������Ʈ��
- npm install
- ���� ���� : npm start
- npm install express-session --save
- npm install socket.io --save

# ���� ���
- ���� : http://dalkomit.tistory.com/50
- ejsSession + socketio�� �߰��� ���
- socketio ������ io.js ���� ����, socketio ���� �̺�Ʈ�� �ۼ�
- bin/www ���� io.js ȣ��
- node_modules�� �ִ� socket.io.js�� public/javascripts/socket.io.js �� ����
- ejs���� <script src="/javascripts/socket.io.js></script> �� ȣ��
- ejs���� socketio ���� (�ش� ������ logout.ejs���� ����)
    
# ejs mysql ���� �� ���� �� url
- https://dotblogs.com.tw/explooosion/2016/07/18/010601