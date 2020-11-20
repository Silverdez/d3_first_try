// alert("hello Jeff")
// const headerTag = document.querySelector("h1");
// headerTag.innerHTML = "Hello someone";
// headerTag.style.backgroundColor = "var(--primary-orange)";
// headerTag.style.fontSize = "64px";

const headerTags = document.querySelectorAll('h1')
// headerTags.forEach(header1 => {
//   const hue = 360 * Math.random()
//   header1.style.backgroundColor = "hsl(" + hue + ",100%, 50%)"
// })

headerTags.forEach((h1, index) => {
  h1.innerHTML = 'Header tag number ' + index
})

// const rectTags = document.querySelectorAll('rect')
const data = [2, 3, 4, 7, 12, 24, 550, 420, 731, 420, 130, 670, 356, 234]

// rectTags.forEach((tag, i) => {
//   //   tag.style.fill = 'red'
//   //   const width = 100 + 300 * i
//   const width = data[i]
//   tag.setAttribute('width', width + 'px')
// })

const todaySvg = document.querySelector('svg')

data.forEach((d, i) => {
  const rectTag = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rectTag.setAttribute('x', i * 36)
  rectTag.setAttribute('y', 112 - d)
  rectTag.setAttribute('width', 24)
  rectTag.setAttribute('height', d)

  todaySvg.append(rectTag)
})
