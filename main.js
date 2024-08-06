document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const contents = document.querySelectorAll('.inner-content');
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); 
  
        const target = button.getAttribute('data-target');
  
        contents.forEach(content => {
          content.style.display = 'none';
        });
  
        const targetContent = document.querySelector(`.inner-content[data-content="${target}"]`);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      });
    });
  
    const initialContent = document.querySelector('.inner-content[data-content="pranayama"]');
    if (initialContent) {
      initialContent.style.display = 'block';
    }
  });
  