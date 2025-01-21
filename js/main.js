document.getElementById('download-cv').addEventListener('click', function(){
    const link = document.createElement('a');
    link.href = 'assets/cv/Curriculum Vitae.pdf';
    link.download = 'LeyderCV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})
