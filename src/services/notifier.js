const slackWebhook = process.env.SLACK_WEBHOOK_URL;

async function notifySlack(message) {
  try {
    const response = await fetch(slackWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `Error occurred: ${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Slack notification failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error sending notification to Slack:", error);
  }
}

export default notifySlack;
