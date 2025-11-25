const people = [
  {
    fullName: "Aarav Sharma",
    image: "https://api.samplefaces.com/face?width=150&n=1",  // sample face
    profession: "Software Engineer",
    description: "Passionate full-stack developer specializing in modern web technologies.",
    tags: ["JavaScript", "React", "Node.js", "Web Development"]
  },
  {
    fullName: "Meera Patel",
    image: "https://api.samplefaces.com/face?width=150&n=2",
    profession: "AI Researcher",
    description: "Focuses on deep learning, computer vision, and real-time AI solutions.",
    tags: ["AI", "Deep Learning", "Python", "ML Research"]
  },
  {
    fullName: "Rahul Verma",
    image: "https://loremfaces.net/96/id/3.jpg",  // lorem faces
    profession: "Cybersecurity Analyst",
    description: "Expert in threat analysis, penetration testing, and system hardening.",
    tags: ["Security", "Pentesting", "Networking", "Linux"]
  },
  {
    fullName: "Ishita Roy",
    image: "https://testingbot.com/free-online-tools/random-avatar/200?u=ishita",  // deterministic avatar
    profession: "UI/UX Designer",
    description: "Designs intuitive user experiences and modern product interfaces.",
    tags: ["UI/UX", "Figma", "Design Systems", "Prototyping"]
  },
  {
    fullName: "Karan Singh",
    image: "https://desilog.sivaramp.com/r/avatars/256",  // desi avatar
    profession: "Data Scientist",
    description: "Works on predictive analytics, visualization, and large-scale ML models.",
    tags: ["Data Science", "Python", "Machine Learning", "Visualization"]
  }
];




let sum = '';
people.forEach(function(elem){
  sum = sum + ` <div id="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
    </div>`
})
let main = document.querySelector('main');

main.innerHTML = sum;