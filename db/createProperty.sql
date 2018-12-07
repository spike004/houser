INSERT INTO houser(propertyname,address,city,state,zip)
VALUES($1,$2,$3,$4,$5);
select propertyname,address,city,state,zip from houser where propertyname =$1 and address =$2 and city=$3 and state=$4 and zip=$5;