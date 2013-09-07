;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_P3_CreateImage) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; BSL_P3 -- Create an image using image composition primitives.
; 9/6/13 @ 2045 to 2057
; use DrRacket square, aside, and above functions
(require 2htdp/image)
;(beside (square 40 "solid" "blue")
;        (square 40 "solid" "yellow"))
;(beside  (square 40 "solid" "yellow")
;        (square 40 "solid" "blue"))
; my answer above, however, there is a space between the top & bottom set of squares
; =====PROF'S ANSWER =====
(above (beside (square 40 "solid" "blue")
        (square 40 "solid" "yellow"))
(beside (square 40 "solid" "yellow")
        (square 40 "solid" "blue")))

; the only thing you really missed was that the closing paren is at the *very end*
