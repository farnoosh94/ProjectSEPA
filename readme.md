## SEPAproject( Student Educational Performance Analysis )
- This project is for learning analytics course in UDE .
<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/sepa.png"  width="200" height="170">

youtube video about project
https://youtu.be/gITrFJQYhfc

## Objectives
- Explore educational performance of students  by using ready data set to perform some initial data  visualization.
- Predict the performance of students.
-  Apply KNN algorithm of machine learning to the data set in order to predict the performance of the student based on these characteristics.

## Dataset
This project use this Dataset [Students' Academic Performance Dataset](https://www.kaggle.com/aljarah/xAPI-Edu-Data) 


## Architechture of whole websit
<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/Architechture.PNG"  width="560" height="297">


## Computing KNN
- First we need to convert categorical attribute to ordered attribute
<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/catoor.png"  width="460" height="497">

- Testing the accuracy and Knn Classification
<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/testing.png"  width="640" height="497">

- Saving KNN in pickle file 
<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/knnpickle.png"  width="260" height="100">

## Visualization
We basicly used four different kinds of idioms to visualization our data.

1.Pie Chart 
-->task of Present distribution of the categorical attributes
- eg. dustribution of gender

<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/gender.PNG"  width="493" height="363" >

2.Bar Chart 
-->task of 1. Present distribution of the  categorical  attributes;
           2.Compare student’s performance
- eg. Nationality-Grade

<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/nationality-Grade.PNG" >

3.Stack Bar Chart
-->task of 1.Present distribution of categorical attributes
           2.Compare student’s performance
           3.Show the Part-to-whole relationship
- eg. Gender-Grade

<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/gender-grade.PNG" >
         
4.Box Plot
-->task of 1.Present distribution of the numerical attributes
           2.Locate outliers
           3.Find Trends
- eg. Behavior-discussion-Grade

<img src="https://github.com/Mohaimn94/LA-ProjectSEPA/blob/master/static/img/behabiour-discussion.PNG"   width="685" height="445">



## Requirments and prepration
This project is based on the following technologies:

* Model-Classification
  + [Pickle](https://docs.python.org/3/library/pickle.html)
  + [Numpy](https://numpy.org/)
  + [scikit-learn](https://scikit-learn.org/stable/)
* For Website
  + [jQuery](https://jquery.com/)
  + [Flask](https://www.palletsprojects.com/p/flask/)
  + [Bootstrap](https://getbootstrap.com/)
  + [Css for styling](https://www.w3schools.com/css/)
* For Visualisation Part
  + [Highcharts](https://www.highcharts.com/)
  
## How to run the project:
- Clone or download the repository
- Configure the local database in your IDE
- Install above libraries from Terminal
- Run the project on the localhost
## Collaborators:
- Mohaimn Al-Alshekh Alsagara
- Maral Goudarzi
- Meijie Li
- Farnoosh shahabbaspour 

  
