# Website Visit Count Faker Nodejs Script

This script return the website fake visits count and based on the time.

The count json file has two values
1.number of visits  
2.last update time

Every time you call the nodejs file it increses the count based on the last update time and current time.

#For Example 
###Json Initial Value

```javascript
    {
        count:10000, //starting visit count
        updatedAt:1541069844137 //Time in value
    }
```
###Execute the Nodejs File

it will execute and calculate the value and return the new count.

```javascript
    node ./visitCountFaker.js
```

###New Json File Value
The count value will return example 10030.

```javascript
    { "count":10030, "updatedAt":1541074435128 }
```

    
## License

Apache License Version 2.0, January 2004
