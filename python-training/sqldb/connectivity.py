import psycopg2

connection = psycopg2.connect(
    database = 'walletdb',
    user = 'aniruddha',
    password = 'aniruddha',
    host = 'localhost',
    port = '5432'
)

print('✅ Connected Successfully')

cursor = connection.cursor()

cursor.execute("insert into car values(1, 'abc', 23)")

connection.commit()
cursor.close()
connection.close()

