const LinksSocialMedia = {
  github: 'wjduarte',
  youtube: 'channel/UCF3Q0u5JVbp5a5RBbolDAkA',
  facebook: 'wilkertt.duarte',
  instagram: 'wilkertt',
  twitter: 'wilkertt'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
