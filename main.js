var primaryKeyword;
var keywords = [];
var results = [];

$('.submit-search').click(function () {
    primaryKeyword = $('.primary-keyword-input').val().trim();
    keywords = $('.keywords-wrap textarea').val().trim();


    if (primaryKeyword == '') {
        
    }
    else if (keywords == '') {
        
    }
    else {
        keywords = keywords.split(/\s+/);
        permutations();
    }
});

function permutations() {
    results = [];

    for (i = 0; i < keywords.length; i++) {
        domain1 = keywords[i] + primaryKeyword;
        domain2 = primaryKeyword + keywords[i];
        //domain3 = keywords[i] + keywords[i];
        results.push(domain1);
        results.push(domain2);
        //results.push(domain3);
    }
    scan_domains();
}

function scan_domains() {
    $('.status').show();
    $('.result-set-wrap h2 .status').hide();
    $('.result-set-wrap').show();
    $('.result-set').html('');

    len = results.length;
    availableCount = 0;

    t = 0;
    for (i = 0; i < len; i++) {
        domain = results[i] + $('.domain-extension :selected').text();
        $.ajax({
            type: 'POST',
            url: 'Includes/domain-lookup.inc.php',
            data: {
                domain: domain
            },
            success: function (r) {
                console.log(r);
                t++;
                result = JSON.parse(r);
                available = result['domain']['available'];
                if (available == true) {
                    availableCount++;
                    available_domain = result['domain']['fullName'];
                    $('.result-set').append('<div class="domainRsltRow"><p class="domain-result">'+available_domain+'</p><button class="purchDomainBtn">Buy</button></div>');
                }

                resultsFound = len + ' domains scanned / ' + availableCount + ' available';
                $('.result-set-wrap h2').text(resultsFound).show();

                if (t == len) {
                    $('.status').hide();
                }
            }
        });
    }
}

$(document).on('click', '.purchDomainBtn', function(){
    domain = $(this).siblings('.domain-result').text();
    url = 'https://www.namecheap.com/domains/registration/results/?domain='+domain;
    window.open(url, '_blank')
});