pipeline {
  agent any

  environment {
        EMAIL_BODY =
         """
            <p> EXECUTED: Job <b> \'${env.JOB_NAME} : ${env.BUILD_NUMBER})\' </b> </p>
            <p>
            View console output here
            "<a href="${env.BUILD_URL}">${env.JOB_NAME} :${env.BUILD_NUMBER} </a>"
            </p>
            <p><i> (Build log is attached.) </i></p>
        """
        EMAIL_SUBJECT_SUCCESS =  "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_SUBJECT_FAILURE =  "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_RECEPIENT = '2ad1c0acfd-e28b3a@inbox.mailtrap.io'

    }

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

  post {
        success {
            emailext attachLog: true,
                body: EMAIL_BODY,
                subject: EMAIL_SUBJECT_SUCCESS,
                to: EMAIL_RECEPIENT
        }

        failure {
            emailext attachLog: true,
               body: EMAIL_BODY ,
               subject: EMAIL_SUBJECT_FAILURE,
               to: EMAIL_RECEPIENT
        }
    }
}