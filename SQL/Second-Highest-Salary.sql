-- Create table If Not Exists Employee (id int, salary int)
-- Truncate table Employee
-- insert into Employee (id, salary) values ('1', '100')
-- insert into Employee (id, salary) values ('2', '200')
-- insert into Employee (id, salary) values ('3', '300')

-- Write a solution to find the second highest salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).

-- Write your MySQL query statement below
SELECT
    (SELECT DISTINCT
        salary
    FROM
        Employee
    ORDER BY
        salary DESC
    LIMIT 1 OFFSET 1) AS SecondHighestSalary