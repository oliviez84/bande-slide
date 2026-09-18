$(document).ready(function () {
    var $img = $('.effet img');
    var $group = $('.group');
    var $nbBandes = $('#nbBandes');
    var $nbBandesValeur = $('#nbBandesValeur');
    var nb = parseInt($nbBandes.val(), 10) || 2;
    var largeur = 0;
    var hauteur = 0;

    function majDimensions() {
        largeur = $img.width();
        hauteur = $img.height();
        $group.css({ width: largeur, height: hauteur });
    }

    majDimensions();
    $img.on('load', majDimensions);
    $(window).on('resize', majDimensions);

    $nbBandes.on('input', function () {
        nb = parseInt(this.value, 10);
        $nbBandesValeur.text(nb);
    });

    $('#valide').on('click', function () {
        var lien = $img.attr('src');
        var tiers = largeur / nb;
        var depart = -tiers;
        var pasPourcent = 100 / (nb - 1);
        var html = '<div class="band band0" style="left:' + depart + 'px;width:' + tiers + 'px;height:' + hauteur + 'px;background:url(' + lien + ') 0% 0;"></div>';

        for (var i = 1; i < nb; i++) {
            var position = tiers * i;
            var pourcentage = pasPourcent * i;
            html += '<div class="band bandy' + i + '" style="left:' + position + 'px;width:0;height:' + hauteur + 'px;background:url(' + lien + ') ' + pourcentage + '% 0;"></div>';
        }

        $group.empty().append(html);

        $('.band0').stop().animate({ left: 0 }, 700);
        for (var j = 1; j < nb; j++) {
            $('.bandy' + j).stop().animate({ width: tiers }, 700);
        }
    });
});
