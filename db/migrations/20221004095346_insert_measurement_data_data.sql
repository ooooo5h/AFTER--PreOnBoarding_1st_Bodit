-- migrate:up

INSERT INTO 
measurement_data (measurement_id, data_type_id, data)
VALUES 
(1,1,75),
(1,2,59),
(1,3,-35),
(1,4,35),
(1,5,0),
(2,1,23),
(2,2,63),
(2,3,-36),
(2,4,42),
(2,5,0),
(3,1,48),
(3,2,58),
(3,3,-35),
(3,4,44),
(3,5,3),
(4,2,157),
(4,3,-49),
(5,2,160),
(5,3,-52),
(6,4,50),
(7,4,56),
(8,2,130),
(8,3,-58),
(8,4,78),
(8,5,-30),
(9,2,125),
(9,3,-59),
(9,4,79),
(9,5,-42),
(10,2,112),
(10,3,-43),
(10,4,61),
(10,5,67),
(11,2,113),
(11,3,-47),
(11,5,73)

-- migrate:down

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE measurement_data;
SET FOREIGN_KEY_CHECKS = 1;