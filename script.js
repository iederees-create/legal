document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
});

// Dynamic content for the podcast feed
const podcastFeed = document.getElementById('podcast-feed');
const podcasts = [
    { title: "The Legal Brief - Ep1", link: "#" },
    { title: "Law Simplified - Ep2", link: "#" },
];

podcasts.forEach(podcast => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${podcast.link}">${podcast.title}</a>`;
    podcastFeed.appendChild(li);
});
