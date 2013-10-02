;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname P3_Compound-and-HtDW_growing-grass) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
(require 2htdp/image)
(require 2htdp/universe)

;; P3_Compound-and-HtDW_growing-grass.rkt
;; =========
;; CONSTANTS
(define WIDTH  150)
(define HEIGHT 100)
(define MTS (empty-scene WIDTH HEIGHT))
(define GS (rectangle 5 20 "solid" "dark green"))
(define GM (rectangle 5 30 "solid" "dark green"))
(define GL (rectangle 5 45 "solid" "dark green"))
;; !!! -- add SPEED?

;; ================
;; DATA DEFINITIONS
;; Grassx is Number
;; interp. the x-position of the grass blade in screen coordinates
(define G1 0)              ; left edge
(define G2 (/ 2 WIDTH))    ; middle
(define G3 WIDTH)          ; right edge

;#
(define (fn-for-grass g)
  (... g))

;; =========
;; FUNCTIONS