const core = require('@actions/core')
const exec = require('@actions/exec')

async function run(){
    try{
        const snykApiToken = core.getInput("snyk_api_token")
        const snykOrgId = core.getInput("snyk_org_id")
        const snykProjectId = core.getInput("snyk_project_id")
        const jiraApiToken = core.getInput("jira_api_token")
        const jiraServer = core.getInput("jira_server")
        const jiraProjectId = core.getInput("jira_project_id")
        const jiraLabelPrefix = core.getInput("jira_label_prefix")
        const jiraComponentNames = core.getInput("jira_component_names")
        const jiraEpicId = core.getInput("jira_epic_id")
        const dryRun = core.getInput("dry_run")
        const excludeFilesPath = core.getInput("exclude_files_path")

        const src = __dirname

        await exec.exec(`python ${src}/jira-automation.py ${snykApiToken} ${jiraApiToken} ${snykOrgId} ${jiraServer} ${jiraProjectId} ${jiraLabelPrefix} ${jiraComponentNames} ${jiraEpicId} ${snykProjectId} ${dryRun} ${excludeFilesPath}`)
    }catch(error){
        core.setFailed(error.message)
    }
}

run()