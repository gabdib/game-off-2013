/**
 * l10n.js
 *
 * Copyright (c) 2014 Dvubuz Games
 *
 */

(function L10N(w) {

    var en = {
        'menu': {
            "wiz_earth": "Entria posses the ultimate creator knowledge. She has the power to create \n" +
            "beings and shape nature in any way she desires. She is the manifestation of life. \n" +
            "Her eternity is envied by Rafel who secretly plots to destroy her.", 

            "wiz_fire": "The youngest among wizards. Valeriya is the only daughter of Capres, ultimate \n" +
            "ruler of fire. In the beginning of time, Carpes fought Azalsor but lost. He was \n" +
            "destroyed but his daughter was saved by the young fires. Now after a thousand \n" + 
            "human years she is ready to challenge Azalsor.",

            "wiz_water": "An old and powerful wizard. Rumors are he has been one of the first to roam \n" +
            "the young Universe. He destroyed the wizard Carpes, father of Valeriya. \n" +
            "Azalsor is a wizard of wisdom and he will not jump into a fight unless he has \n" +
            "no other choice.",

            "wiz_air": "Rafel is a male wizard born out of the fight between Azalsor and Carpes. \n" +
            "Water and fire clashed and out of the dynamic of the this great battle the wizard \n" +
            "of air was born. The most beautiful of his kind. He carries the grace of being and \n" +
            "the seeds of life. But his looks are deceiving. He will absorb the very life out of \n" +
            "his enemies. He devours their energy in order to content his lust for eternal youth.",

            "select_character": "Choose your character",
            "back": "Back",
            
            "howto_turns": "Turns \n \n" +
            "Game starts with the 4 players (wizards) positioned at the 4 corners of the map. \n" +
            "The goal is to reach the fountain of endless energy in the center of the map. \n" +
            "On each turn, players can choose whether to throw the dice of chance or cast a spell. \n" +
            "Wizards move only forward on predefined spiral-alike paths. Paths can be seen on each player's move. \n",
            
            "howto_chance": "Chance \n \n" +
            "Throw the dice and let Chance determines what happens next. \n \n" +
            "Side	Action			Description \n \n" +
            "1		Move			Move 1 tile ahead \n" +
            "2		Move			Move 2 tiles ahead \n" +
           	"3		Numb			Skip 1 turn \n" +
            "4		Mana			Mana +1 \n" +
           	"5		Mana			Mana +2 \n" +
           	"6		Jump/Teleport	Jump 2 tiles ahead. If destination tile is Abyss teleport will fail. \n",
           	
           	"howto_spells_mana": "Spells & Mana \n \n" +
            "All players start with 10 points of mana. Mana does not get replenished over time! \n" +
            "The only way to replenish mana is to get 4 or 5 when throwing the dice. \n \n" +
            "Wizards have two types of spells available - common and special. \n" +
            "Common can be casted by all wizards and special is a spell available only to the particular wizard. \n \n",
            
            "howto_rules": "Rules \n \n" +
            "You can cast Abyss on any tile that is not occupied or that has no Path casted. \n" +
            "You can cast Clay on any tile except on Abyss, Stone or Path casted tiles. \n" +
            "You can cast Stone on any tile except on Abyss or Path casted tiles. \n" +
            "Casting Path clears all previous casts over 3 tiles ahead. \n" +
            "If destination tile has Abyss casted on it, casting Teleport will teleport you to the previous tile. \n" +
            "Freeze affects only wizards that are already on or will step into a frozen tile. \n" +
            "Blind and Freeze will cause all affected players to skip turns completely.",
            
            "howto_story": "Story \n \n" +
            "It is very rare for humans to achieve the status of a higher being. This requires absolute devotion to the ethereal. \n" +
            "To the very fabrics that space constitutes of. Those who learn how to thread these fabrics, \n" +
            "twist them and control them, will then get elevated closer to the higher presence. \n",
            
           	"how_to_play_title": "How to play Psiral"       
        },

        'play': {
            "next_turn": "Turn {} starts",
            "smove": "\'s move",
            "skips_move": " skips this move",
            "no_mana": "Not enough mana to cast!",
            "select_tile": "Select a target tile to cast \n spell on. \n (Click here to cancel)",
            "move1": " moves 1 tile",
            "move2": " moves 2 tiles",
            "numbed": " got numbed. \n Skips 1 move.",
            "mana1": " gains +1 mana",
            "mana2": " gains +2 mana",
            "teleport": " teleports 2 tiles",
            "teleport_blocked": " cannot teleport! \n Blocked.",
            "move_blocked": " cannot move \n ahead! Blocked.",
            "move_2win": " has reached the \n fountain. \n The story ends here.",
            "casts": "{} casts {}"
        }
    };

    var current = null;

    /**
     * Public interface
     */
    var _instance = {
        init: function(locale) {
            switch(locale) {
                case 'en':
                default:
                    current = en;
                return;
            }
            throw locale + " is unsupported locale!";
        },

        get: function(what) {
            var parts = what.split('.');
            var obj = current[parts[0]];
            for (var i = 1; i < parts.length; i++) {
                obj = obj[parts[i]];
            }
            // format
            if (obj && arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments, 1);
                for (var i = 0; i < args.length; i++) {
                    obj = obj.replace('{}', args[i]);
                }
            }
            return (obj ? obj : '');
        }
    };
    w.nls = _instance;  
}(window));