function TermSearch() {
        const searchTerm = document.getElementById('Search-Terms').value.toLowerCase();
        const searchTerms = ['rascar', 'Rascar', 'Rascar.html', 'Secretohtml', 'puzzle', 'puzzle.html', 'puzzlehtml', 'Credits',  'credits', 'credits.html', 'creditshtml'];

        if (searchTerms.includes(searchTerm)) {
            if (searchTerm.includes('rascar')) {
                window.open('secreto.html', '_blank');
        }   else if (searchTerm.includes('puzzle')) {
                window.open('puzzle.html', '_blank');
        }   else if (searchTerm.includes('credits')) {
            window.open('credits.html', '_blank');
        }
        } else {
            alert('Término de búsqueda no encontrado.');
        }
};