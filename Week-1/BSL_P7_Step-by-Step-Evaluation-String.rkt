;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname BSL_P7_Step-by-Step-Evaluation-String) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
; (require 2htdp/image)
; BSL_P7 Step by step evaluation of a call to a function that calls a string
; primitive in its body.
; 9/7/2013 @ 0642

; Given the following function definition:

(define (farfle s)
  (string-append s s))

; Write out the step-by-step evaluation of the expression:

(farfle (substring "abcdef" 0 2))

; (farfle "ab")
; (string-append "ab" "ab")
; "abab"
