# npm ���
- npm install -g express-generator
- express --ejs ������Ʈ��
- cd ������Ʈ��
- npm install
- ���� ���� : npm start
- npm install express-session --save

# ���� ���
- app.js���� session �ɼ� ����
- ���� : �ɼ� ���� �κ��� �Ʒ��� �θ� �̵���� ������ ���� req.session�� undefined

- ó�� �����ϸ� app.js���� '/' ��� ��û ---> loginRouter�� login.js ȣ��
- login.js���� login.ejs�� view�� ������

- login.ejs���� myIndex�� post ��û
- app.js���� '/myIndex' ��� ��û ---> myIndexRouter�� myIndex.js ȣ��
- myIndex.js���� myIndex.ejs�� view�� ������

- myIndex.ejs���� myLogout���� get ��û
- app.js���� '/myLogout' ��� ��û ---> myLogoutRouter�� myLogout.js ȣ��
- myLogout.js���� logout.ejs�� view�� ������

- *���� : ������ js���� router.get Ȥ�� router.post ���� ��δ� ��� '/' ��.
- ���� router �ȿ��� ��θ� '/myIndex'�� ������ '/myIndex/myIndex'�� �Ǳ� ����