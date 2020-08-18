pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('clone repository') {
        steps{
            git 'https://github.com/Ammly/gallery'
        }
    }
    stage('Build') {
      steps {
        sh 'echo Building...'
      }
    }

    stage('Test') {
      steps {
        sh 'echo Testing...'
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo Deploying to Heroku...'
        withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
            sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/darkroom-gallery.git master'
        }
      }
    }

  }
}