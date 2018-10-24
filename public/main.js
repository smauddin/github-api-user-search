$('#about-toggle').hide();
$('#about').on('click', () => {
    $('#about-toggle').show();
    $('#root').hide();
});

$('#home').on('click', () => {
    $('#root').show();
    $('#about-toggle').hide();
});