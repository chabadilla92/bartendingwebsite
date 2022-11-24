# Welcome !
I outlined some basic instructions for you guys but hit me up if you have any questions..

# Wireframe: 
Here is the wireframe website along with the credentials to get you access..

whimsical.com\
email: kristineceecee@gmail.com\
password: ChrisSucks420\

# Workflow process:
I want to simulate the actual workflow of a dev team so try to follow this process for making changes and pushing code to production..

We will be working off the master branch for development and the main branch will be production
DO NOT push changes to the main branch
Whenever you want to start a new pull request, start on the master branch and make a new branch..

git branch (checks which current branch you're on)\
git checkout master (git checkout moves you into a branch)\
git branch new-branch (adding a name after git branch CREATES the branch)\
git checkout new-branch (move into the new branch)\

Once you have created some changes, add them to your current branch, commit, then push the changes..

git add . (adds all new code)\
git commit -m 'First Commit' (commits the changes with a comment of your choice, comment in the quotes)\
git push origin new-branch (pushes the changes to the name of the branch you're currently on, please specify the branch name)\

I would recommend making frequent commits/pushes to your branch so that you don't accidentally lose code due or if you want to revert changes back to a specific branch you can easily do that

Once you have comfortable with all the changes to your current branch its time to make a Pull Request on Github..
I will review your PR and when it is approved you can merge those changes to the master branch 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Recommended VSCode Extensions
This is what i'm using for VSCode Extensions if you're interested, i'd suggest getting Prettier for sure for formatting..

Prettier\
Auto Close Tag\
Auto Rename Tag\
Code Spell Checker\
Live Server\