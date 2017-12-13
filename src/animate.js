import anime from 'animejs'
import $ from 'jquery'

$('#root').on('click', '.deleteItem', function(e) {
  let item = e.currentTarget.parentNode
  anime({
    targets: item,
    translateY: -35,
    opacity: 0,
    height: 0,
    marginTop: -10,
    elasticity: 0,
    duration: 1000,
    display: 'none',
  })
  setTimeout(function(){$(item).remove()}, 450)
})

// $(document).on('click', '.slideArrows', function(e) {
//   function slide(direction) {
//     let item = document.getElementById('selectedToDo').firstChild
//     anime({
//       targets: item,
//       translateX: function() {
//         let num = 200
//         if (direction === 'left') {
//           return num
//         }
//         else if (direction === 'right') {
//           return num * (-1)
//         }
//       },
//       opacity: 0,
//       elasticity: 0,
//       duration: 700,
//     })
//     setTimeout(function(){$(item).remove()}, 450)
//   }
//   if (this.id === 'leftSlideArrow') {
//     slide('left')
//   }
//   else if (this.id === 'rightSlideArrow') {
//     slide('right')
//   }
// })
