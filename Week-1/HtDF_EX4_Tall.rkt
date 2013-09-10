;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDF_EX4_Tall) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
(require 2htdp/image)
;DESIGN a function that consumes an image and determines whether the 
;image is tall.
;
;Remember, when we say DESIGN, we mean follow the recipe.
;
;Leave behind commented out versions of the stub and template.

;; IMAGE -> BOOLEAN                            ; this is the signature
;; produce true if an image's height > width   ; this is the purpose
(check-expect (tall? (rectangle 20 40 "solid" "blue")) true)
(check-expect (tall? (rectangle 40 20 "solid" "blue")) false)
(check-expect (tall? (rectangle 40 40 "solid" "blue")) false)

;(define (tall? img)                           ; stub
;  false)

;(define (tall? img)                           ; template                          
;  (... img))

;(define (tall? img)                             
;  (if (> (image-height img) (image-width img))
;      true
;      false))

(define (tall? img)                             
  (if (> (image-height img) (image-width img))) ; this is the same as the
                                                ; statement above


(tall? (rectangle 20 30 "solid" "green"))

