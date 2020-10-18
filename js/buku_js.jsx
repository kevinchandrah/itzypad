var data_buku = [];
//judul,deskripsi,genre,artist, author,recomendation,year,cover, html buku

//BFTB = Banyak Data Tiap Buku
var BDTB = 9;
data_buku.push("Alice's Adventures in Wonderland",
               "The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures with thoroughly illogical and very strange creatures, often changing size unexpectedly (she grows as tall as a house and shrinks to 3 inches [7 cm]). She encounters the hookah-smoking Caterpillar, the Duchess (with a baby that becomes a pig), and the Cheshire Cat, and she attends a strange endless tea party with the Mad Hatter and the March Hare. She plays a game of croquet with an unmanageable flamingo for a croquet mallet and uncooperative hedgehogs for croquet balls while the Queen calls for the execution of almost everyone present. Later, at the Queen’s behest, the Gryphon takes Alice to meet the sobbing Mock Turtle, who describes his education in such subjects as Ambition, Distraction, Uglification, and Derision. Alice is then called as a witness in the trial of the Knave of Hearts, who is accused of having stolen the Queen’s tarts. However, when the Queen demands that Alice be beheaded, Alice realizes that the characters are only a pack of cards, and she then awakens from her dream.",
               "Fantasy",
               "N/A",
               "Lewis Carroll",
               "Through the Looking-Glass",
               "1987",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/image/A_second_chance.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/Alice's_Adventures_in_Wonderland.html"
               );
data_buku.push("Ironi, Islandia dalam Kekelaman",
               "amsiong was desperately trying to go out from his position that trap in bottomless pit dungeon with himself and simple magic stick.",
               "One-shot, Drama",
               "N/A",
               "Michelle",
               "",
               "2018",
               "https://kevinchandrah.github.io/itzypad/asset/image/itzypad.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/Ironi_Islandia_dalam_Kekelaman.html"
               );
data_buku.push("Romeo and Juliet",
               "An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father’s choice, the County Paris. With the help of Juliet’s nurse, the women arrange for the couple to marry the next day, but Romeo’s attempt to halt a street fight leads to the death of Juliet’s own cousin, Tybalt, for which Romeo is banished. In a desperate attempt to be reunited with Romeo, Juliet follows the Friar’s plot and fakes her own death. The message fails to reach Romeo, and believing Juliet dead, he takes his life in her tomb. Juliet wakes to find Romeo’s corpse beside her and kills herself. The grieving family agree to end their feud.",
               "Romance, Tragedy",
               "",
               "N/A",
               "William Shakespeare",
               "1597",
               "https://kevinchandrah.github.io/itzypad/asset/image/itzypad.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/Romeo_and_Juliet.html"
               );
data_buku.push("The Art of War",
               "The Art of War is a Chinese military treatise that was written during the 6th century BC by Sun Tzu. Composed of 13 chapters, each of which is devoted to one aspect of warfare, it has long been praised as the definitive work on military strategies and tactics of its time. The Art of War is one of the oldest books on military strategy in the world. It is the first and one of the most successful works on strategy and has had a huge influence on Eastern and Western military thinking, business tactics, and beyond. Sun Tzu was the first to recognize the importance of positioning in strategy and that position is affected both by objective conditions in the physical environment and the subjective opinions of competitive actors in that environment. He taught that strategy was not planning in the sense of working through a to-do list, but rather that it requires quick and appropriate responses to changing conditions. Planning works in a controlled environment, but in a competitive environment.",
               "Non-fiction",
               "N/A",
               "Sun Tzu",
               "",
               "5th century BC",
               "https://kevinchandrah.github.io/itzypad/asset/image/itzypad.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/The_Art_of_War.html"
               );
data_buku.push("The Adventures of Sherlock Holmes",
               "The Adventures of Sherlock Holmes is the series of short stories that made the fortunes of the Strand magazine, in which they were first published, and won immense popularity for Sherlock Holmes and Dr Watson. The detective is at the height of his powers and the volume is full of famous cases, including 'The Red-Headed League', 'The Blue Carbuncle', and 'The Speckled Band'. Although Holmes gained a reputation for infallibility, Conan Doyle showed his own realism and feminism by having the great detective defeated by Irene Adler - the woman - in the very first story, 'A Scandal in Bohemia'.",
               "Crime, Mystery",
               "Sidney Paget",
               "Arthur Conan Doyle",
               "The Memoirs of Sherlock Holmes, The Sign of the Four",
               "1892",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/The_Adventures_of_Sherlock_Holmes.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/The_Adventures_of_Sherlock_Holmes.html"
               );
data_buku.push("The Murder on the Links",
               "The Murder on the Links is a work of detective fiction by Agatha Christie and first published in the UK by The Bodley Head in May 1923 and in the US by Dodd, Mead and Company in the same year.",
               "Crime",
               "N/A",
               "Agatha Christie",
               "The Secret Adversary, Poirot Investigates",
               "1923",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/The_Murder_on_the_Links.jpg",
               "https://kevinchandrah.github.io/itzypad/asset/book_and_cover/The_Murder_on_the_Links.html"
               );

function ambil_buku(){
    
    //untuk isi bagian home
    if(window.location.href.split(/(\\|\/)/g).pop() == "home.html"){ 
        //untuk ke menu selanjutnya 
        document.getElementById('main_section').insertAdjacentHTML('afterbegin',
                                                                        '<div class="d-flex justify-content-center">\n' +
                                                                            '<div class="btn-toolbar mb-3 " role="toolbar" aria-label="Toolbar with button groups">\n' +
                                                                                '<div class="btn-group mr-2" role="group" aria-label="First group">\n' +
                                                                                '<button type="button" class="btn btn-secondary"><</button>\n' +
                                                                                '<button type="button" class="btn btn-secondary">1</button>\n' +
                                                                                '<button type="button" class="btn btn-secondary">></button>\n' +
                                                                                '</div>\n' +
                                                                            '</div>\n' + 
                                                                        '</div>\n');

        //tanpa search
        if(sessionStorage.getItem("search_data") == "null" || sessionStorage.getItem("search_data") == null)  {
            for(var i = 0;i < data_buku.length; i+=BDTB){
                document.getElementById('main_section').insertAdjacentHTML('afterbegin',
                                                                            '<table id="table_ref" class="table table-bordered table-dark">\n' +
                                                                                '<tr class="row1">\n' +
                                                                                    '<td id="table_ref-ukuran_cover" rowspan="4"><img id="table_ref-ukuran_cover" src="' + data_buku[i+7] + '"></td>\n' +
                                                                                    '<td colspan="2"id="table_ref_judul_novel_table"><a id="' + i + '" class="" onclick="deskripsi_buku()">' + data_buku[i] + '</a></td>\n' +   
                                                                                '</tr>\n' +
                                                                                '<tr class="row2">\n' +
                                                                                    '<td id="table_ref_last_chapter_table" colspan="2"><a id="' + data_buku[i+8] + '" class="" onclick="deskripsi_buku_episode()">Last Chapter</a></td>\n' +
                                                                                '</tr>\n' +
                                                                                '<tr class="row2">\n' +
                                                                                    '<td id="table_ref_genre_table" colspan="2">' + data_buku[i+2] +'</td>\n' +
                                                                                '</tr>\n' +
                                                                                '<tr class="row3">\n' +
                                                                                    '<td id="table_ref_deskripsi_table" colspan="2">\n' +
                                                                                        data_buku[i+1] +
                                                                                    '\n</td>\n' +
                                                                                '</tr>\n' +
                                                                            '</table>\n');
            }

        //untuk search
        } else if(sessionStorage.getItem("search_data") != "null"){
            var result = "false";
            for(var i = 0;i < data_buku.length; i+=BDTB){
                if(data_buku[i].toLowerCase().includes(sessionStorage.getItem("search_data").toLowerCase())){
                    document.getElementById('main_section').insertAdjacentHTML('afterbegin',
                                                                                '<table id="table_ref" class="table table-bordered table-dark">\n' +
                                                                                    '<tr class="row1">\n' +
                                                                                        '<td id="table_ref-ukuran_cover" rowspan="4"><img id="table_ref-ukuran_cover" src="' + data_buku[i+7] + '"></td>\n' +
                                                                                        '<td colspan="2"id="table_ref_judul_novel_table"><a id="' + i + '" class="" onclick="deskripsi_buku()">' + data_buku[i] + '</a></td>\n' +   
                                                                                    '</tr>\n' +
                                                                                    '<tr class="row2">\n' +
                                                                                        '<td id="table_ref_last_chapter_table" colspan="2"><a id="' + data_buku[i+8] + '" onclick="deskripsi_buku_episode()">tanggal liris dan last chapter</a></td>\n' +
                                                                                    '</tr>\n' +
                                                                                    '<tr class="row2">\n' +
                                                                                        '<td id="table_ref_genre_table" colspan="2">' + data_buku[i+2] +'</td>\n' +
                                                                                    '</tr>\n' +
                                                                                    '<tr class="row3">\n' +
                                                                                        '<td id="table_ref_deskripsi_table" colspan="2">\n' +
                                                                                            data_buku[i+1] +
                                                                                        '\n</td>\n' +
                                                                                    '</tr>\n' +
                                                                                '</table>\n');
                    result = "true";
                }
            }
            if(result == "true"){
                document.getElementById('main_section').insertAdjacentHTML('afterbegin','<div id="search_result">Search Results for "' + sessionStorage.getItem("search_data") + '"</div>\n');
            } else {
                document.getElementById('main_section').insertAdjacentHTML('afterbegin','<div id="search_result">No Result for "' + sessionStorage.getItem("search_data") + '"</div>\n');
            }
            sessionStorage.setItem("search_data","null");
        }
    }
    //untuk isi list
    else if(window.location.href.split(/(\\|\/)/g).pop() == "list.html"){  
        for(var i = 0;i < data_buku.length; i+=BDTB){
            document.getElementById('table_ref').insertAdjacentHTML('afterbegin','<tr class=""><td><a id="' + i + '" class="" onclick="deskripsi_buku()">' + data_buku[i] + '</a></td></tr>\n' );
        }
    }
    //untuk isi bagian deksripsi_buku
    else if(window.location.href.split(/(\\|\/)/g).pop() == "deskripsi_buku.html"){  
        var data = sessionStorage.getItem("pilih_buku");
        data = parseInt(data,10);
        document.getElementById('table_ref').insertAdjacentHTML('afterbegin','<tr class=""><td><a id="' + data_buku[data+8] + '" onclick="deskripsi_buku_episode()" href="baca_buku.html">Episode ???</a></td></tr>');
        document.getElementById('main_section').insertAdjacentHTML('afterbegin',
                                                                    '<table id="table_ref" class="table table-bordered table-dark">\n' +
                                                                        '<tr>\n' +
                                                                            '<td colspan="4">' + data_buku[data] + '</td>\n' +
                                                                        '</tr>\n' +
                                                                        '<tr class="row1">\n' +
                                                                            '<td id="table_ref-ukuran_cover" rowspan="4"><img id="table_ref-ukuran_cover" src="' + data_buku[data+7] + '"></td>\n' +
                                                                            '<td colspan="2"id="table_ref_deskripsi_table">Description<br>' + data_buku[data+1] + '</td>\n' +
                                                                            '<td> genre :<br>' + data_buku[data+2] + '</td>\n' +
                                                                        '</tr>\n' +
                                                                        '<tr class="row2">\n' +
                                                                            '<td id="table_ref_last_chapter_table" colspan="2">Artist : ' + data_buku[data+3] + ' </td>\n' +
                                                                            '<td>author : ' + data_buku[data+4] + '</td>\n' +
                                                                        '</tr>\n' +
                                                                        '<tr class="row2">\n' +
                                                                            '<td id="table_ref_genre_table" colspan="2">recomendation : ' + data_buku[data+5] + '</td>\n' +
                                                                            '<td>Year : ' + data_buku[data+6] + '</td>\n' +
                                                                        '</tr>\n' +
                                                                    '</table>\n');
    }
    //untuk isi bagian baca_buku
    else if(window.location.href.split(/(\\|\/)/g).pop() == "baca_buku.html"){
        $("#main_section").load(sessionStorage.getItem("pilih_buku_episode"));
    }
}
function deskripsi_buku(){
    //alert(event.srcElement.id);
    sessionStorage.setItem( "pilih_buku",event.srcElement.id);
    window.location.href = "deskripsi_buku.html";
}
function deskripsi_buku_episode(){
    sessionStorage.setItem( "pilih_buku_episode",event.srcElement.id);
    window.location.href = "baca_buku.html";
}
