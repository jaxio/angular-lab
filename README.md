# Angular JS app sample

>>
>> NOTE: This is still a work in progress, we are looking for feedbacks from Angular JS experts.
>> 

Reverse a [sample SQL schema](https://github.com/jaxio/javaee-lab/tree/master/src/main/sql/h2/01-create.sql) 
and generate a full S-CRUD Java EE 7 web application.

S-CRUD means: **S**earch, **C**reate, **R**ead, **U**pdate, **D**elete

The code generation is done by [Celerio](http://www.jaxio.com/en/).

The project uses its own code generation templates, see [src/main/celerio](https://github.com/jaxio/angular-lab/tree/master/src/celerio).

The generated application relies on:

* Springboot
* JPA
* Angular JS

# Requirements

* Java 8
* Maven 3.1.1
* npm
* bower

# How to run it

## Step 0: Retrieve frontend libraries

    bower install

## Step 1: reverse the sample SQL schema and generate the source code
    
From this folder run from:

    mvn -Pdb,metadata,gen
    
## Step 2: Run the app

    mvn spring-boot:run

## Step 3: access the app and play

    http://localhost:8080/

## Extra tip: delete generated code

    mvn -PcleanGen clean

# Contribute

You may contribute in several ways:

* By using the generated app and trying to find its limits
* By reviewing the generated code, is Spring Boot / AngularJS  properly used ?
* By trying to generate a project using your own database schema

You may of course [report issues](https://github.com/jaxio/angular-lab/issues) and/or submit pull requests.