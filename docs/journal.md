# Journal 

## How to read this

This will be a log of each day at the end of the day to see any progress made in learning, find
any pain points that I need to work on, celebrate the victories, and anything that has to do with
the repo. It is one method that I will use to document this project for future reference as well
as get into the habit of creating well documented work. Nothing in here will be vital to the project
as a contributor or as a forked project. 

## Entries

### 08/15/2024

Today I worked on:

* Configuring dockerfiles for development 
* Setup API skeleton for posts, chapters, & categories
* Created documentation directory with new files and spent some time working on them

Thoughts: Late response.

Bugs: There is a weird bug that I am trying to figure out where if you update a category, it won't show 
the update in the list view. 

Resources: None

### 09/03/2024

Today I worked on:

* Finishing up Category Queries and Routes
* Created tests for all of category

Thoughts: I have a feeling that I am not finished with the Category section, however, for right now everything
is functioning exactly as expected with tests all passing. It is getting easier to learn new technologies and how
to get them to work the way I want them to.

Bugs: No current bugs to report.

Resources: Utilized older projects and the ODMantic documentation.

### 09/04/2024

Today I worked on:

* Creating a CI file for GitHub workflows

Thoughts: I dug into figuring out how to make a CI file specifically for what I am doing. I understood the GitLab
version so was a bit lost at first but after using AI and other GitHub examples, I was able to successfully make a 
CI file that has passing tests for what I have currently done. I just need to make sure I format with black before 
merging into main.

Bugs: No current bugs to report.

Resources: GitHub workflows, Claud, professors

### 09/09/2024

Today I worked on:

* Implemented Error Handling
* Adjusted the queries and routes for categories

Thoughts: I realized I needed to add in some better error handling into my code so adjusted a few things and then also 
added in some more testing that I had spaced on. 

Bugs: No current bugs to report.

Resources: 

### 10/19/2024

Today I worked on:

* Fixed Docker Compose and env files
* Created models for posts
* Created create methods for posts

Thoughts: It's been a minute since I worked on this repo with applying to jobs, building a portfolio, and a side 
quest with learning Solidity. I have also been working on the AWS Cloud Practitioner certification so my time has 
been a bit more limited. I created the models for posts and decided to go ahead and embed the chapters into the posts 
instead of having them as a reference. I did this because the chapters won't be used except with one post and if I need 
to update anything in a post, I would rather do it in one document instead of having to try and find the chapter if it 
might share a name with another chapter. This also will make it easier for when it comes to the front end for displaying 
the posts. The only thing I need to adjust with creation is making sure the post doesn't create if the category is 
incorrect. Currently, it is creating the post with the fake category but still giving a 500 error.

Bugs: 500 internal server error when creating a post with a unknown category. Still creates the post which I don't want.

Resources: Current code.