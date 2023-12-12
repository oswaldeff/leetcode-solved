-- Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255))
-- Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255))
-- Truncate table Person
-- insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen')
-- insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob')
-- Truncate table Address
-- insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York')
-- insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California')

-- Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.

-- Write your MySQL query statement below
SELECT
    p.firstName,
    p.lastName,
    adr.city,
    adr.state
FROM
    Person AS p
    LEFT JOIN Address AS adr ON (adr.personId = p.personId)