var config = require('./config').jira;
JiraApi = require('jira').JiraApi;


console.log("connecting to config: \n",config);

var jira = new JiraApi('http', config.host, config.port, config.user, config.password, 'latest');

console.log('Testing connection..');

jira.findIssue('LCATHREE-381', function(error, issue) {
    if(!error){
    	console.log('Success!  Status: ' + issue.fields.status.name);	
    }
    else{
    	console.log('Error connecting: ', error);
    }
    
});