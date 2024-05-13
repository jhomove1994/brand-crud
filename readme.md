# CREATE AND RUN DATABASE

docker run --name brands -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=postgres -e POSTGRES_DB=brands_db -p 5432:5432 -d postgres

## migrations

create table brands (
id serial primary key,
name varchar(255) not null,
address varchar(255) not null,
phone varchar(255) not null,
email varchar(255) not null,
is_active boolean default true,
created_at timestamp default now(),
updated_at timestamp default now()
);

# RUN SERVER

npm install
npm run dev
