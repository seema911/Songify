var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon


//$('.fwd').click(function (e) {
//
//e.preventDefault();
//
//stopAudio();
//
//var next = $('.playlist li.active').next();
//
//if (next.length == 0) {
//
//next = $('.playlist li:first-child');
//
//}
//




       function toggleSong() {
        var song = document.querySelector('audio');
        if(song.paused == true) {
            //console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        }
           
        else {
            //console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
        } 
 


$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})


$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});



$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
    toggleSong();
    });

        $('body').on('keypress',function(event) {
            var target = event.target;
            if (event.keyCode == 32 && target.tagName !='INPUT')
            {
                toggleSong();
            }
        });
        function fancyTimeFormat(time)
        {   
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = time % 60;

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }

     function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
     $('.song-duration').text(duration);
}
// var songName1 = 'Badri Ki Dulhania (Title Track)';
// var songName2 = 'Humma Song';
// var songName3 = 'Nashe Si Chadh Gayi';
// var songName4 = 'The Breakup Song';
//var songList = ['Badri Ki Dulhania (Title Track)', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
  //       var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

//var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4']; 
var song = {
        'name': 'Some Name',
        'artist': 'Some Artist',
        'album': 'Some Album',
        'duration': '3:46',
        'fileName': 'song.mp3',
       'image':'song.jpg'
    }
    var songs = [{
        'name': 'Dooriyan',
        'artist': 'Guri',
        'album': 'Dooriyan',
        'duration': '3:45',
       'fileName': 'song1.mp3',
        'image':'song1.jpg'
    },
    {
        'name': 'Rabb Jane',
        'artist': 'Garry Sandhu',
        'album': 'Rabb Jane',
        'duration': '3:27',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Gangster Scene',
        'artist': 'Gursewak Dhillon',
        'album': 'Gangster Scene',
        'duration': '2:59',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'Kuwari',
        'artist': 'Mankirt Aulakh',
        'album': 'Kuwari',
        'duration': '3:19',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    },
    {
        'name': 'Wang',
        'artist': 'Preet Harpal',
        'album': 'Case-The Time Contious',
        'duration': '5:16',
        'fileName': 'song5.mp3',
        'image':'song5.jpg'
    }];
          <!--for Image-->
        function changeCurrentSongDetails(songObj) {
            $('.current-song-image').attr('src','img/' + songObj.image)
            $('.current-song-name').text(songObj.name)
            $('.current-song-album').text(songObj.album)
            
        }

   
/*function addSongNameClickEvent(songName,position) {
        var id = '#song' + position;
    $(id).click(function() {
                var audio = document.querySelector('audio');
                var currentSong = audio.src;
                if(currentSong.search(songName) != -1)
                    {
                    toggleSong();
                    }
                else {
                    audio.src = songName;
                    toggleSong();
                }
                });
    }*/

function addSongNameClickEvent(songObj,position) {
    var songName = songObj.fileName; // New Variable 
    var id = '#song' + position;
    $(id).click(function() {
                var audio = document.querySelector('audio');
                var currentSong = audio.src;
                if(currentSong.search(songName) != -1)
                    {
                    toggleSong();
                    }
        else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call
       }
    });
}

      //  for (var i = 0; i < fileNames.length ; i++) {
    //addSongNameClickEvent(fileNames[i],i+1)
//} 
        
//addSongNameClickEvent(fileNames[0],1);
//addSongNameClickEvent(fileNames[1],2);
//addSongNameClickEvent(fileNames[2],3);
//addSongNameClickEvent(fileNames[3],4);

window.onload = function() {
    changeCurrentSongDetails(songs[0]);
    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }
updateCurrentTime(); 
setInterval(function() {
updateCurrentTime();
},1000);
   $('#songs').DataTable({
        paging: false
    })
};
