let jobAttempt = ''
  if ([11, 12, 13].includes(jobCurrentAttempt)) {
    jobAttempt = jobCurrentAttempt.toString() + 'th'
  } else if (jobCurrentAttempt % 10 == 1) {
    jobAttempt = jobCurrentAttempt.toString() + 'st'
  } else if (jobCurrentAttempt % 10 == 2) {
    jobAttempt = jobCurrentAttempt.toString() + 'nd'
  } else if (jobCurrentAttempt % 10 == 3) {
    jobAttempt = jobCurrentAttempt.toString() + 'rd'
  } else {
    jobAttempt = jobCurrentAttempt.toString() + 'th'
  }
  const message = `${queueName} for org ${orgName} failed on (${finishedDate.toLocaleString()}) at ${jobAttempt} attempt (TOTAL ATTEMPTS MADE: ${totalJobAttempts}). Job Id: ${jobId}
