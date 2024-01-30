SELECT email FROM customers ORDER BY email;

SELECT id FROM orders WHERE customer_id = 1;

SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

SELECT name, SUM(o.num_cupcakes) FROM cupcakes AS c
    LEFT JOIN orders AS o
        USING (id);