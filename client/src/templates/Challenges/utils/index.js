export function getGuideUrl(forumTopicId) {
  var forumLink = forumTopicId.forumTopicId;
  var link = forumLink.toString();
  return '/hintPagesPDF/' + link + '.pdf';
}

export function isGoodXHRStatus(status) {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}
