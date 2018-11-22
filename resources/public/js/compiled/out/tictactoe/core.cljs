(ns ^:figwheel-always tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.test :refer-macros [deftest is]]))

(enable-console-print!)

;creates  a vector containing the representation of the board. 
(defn new-board [n]
  (vec (repeat n (vec (repeat n "V")))))

(defonce app-state
  (atom {:text "Clojure Tic Tac Toe"
         :board (new-board 3)
         :game-status :in-progress}))

;calculates computer moves. 
(defn computer-move [board]
  (let [remaining-spots (for [i (range 3)
                              j (range 3)
                              :when (= (get-in board [j i]) "V")]
                          [j i])
        ;assigns movement to random position in the collection of remaining spots. 
        move (when (seq remaining-spots)
               (rand-nth remaining-spots))]
    ;associate "C" to move-nth position in the board. 
    (if move
      (assoc-in board move "C")
      board)))

;verifies if there is a line on the board. dx dy represent the direction in which a line is going to be searched.
;straight is detected if all evaluated cells have the same owner. 
(defn straight [owner board [x y] [dx dy] n]
  (every? true?
         (for [i (range n)]
           (= (get-in board [(+ (* dx i) x)
                             (+ (* dy i) y)])
              owner))))

;calculates win for computer or player. 
(defn win? [owner board n]
  (some true?
        (for [i (range 3)
              j (range 3)
              dir [[1 0] [0 1] [1 1] [1 -1]]]
          (straight owner board [i j] dir n))))

;counts if board is full. 
(defn full? [board]
  (every? #{"P" "C"} (apply concat board)))

(defn game-status [board]
  (cond
    (win? "P" board 3) :player-victory
    (win? "C" board 3) :computer-victory
    (full? board) :draw
    :else :in-progress))

(defn update-status [state]
  (assoc state :game-status (game-status (:board state))))

(defn check-game-status [state]
  (-> state
      (update-in [:board] computer-move)
      (update-status)))

;graphic representation of rectangles for the board
(defn blank [i j]
  [:rect
   {:width 0.9
    :height 0.9
    :fill "brown"
    :x (+ 0.05 i)
    :y (+ 0.05 j)
    :on-click
    (fn blank-click [e]
      (when (= (:game-status @app-state) :in-progress)
        (swap! app-state assoc-in [:board j i] "P")
        (if (win? "P" (:board @app-state) 3)
          (swap! app-state assoc :game-status :player-victory)
          (swap! app-state check-game-status))))}])

;graphic representation of circles for the board
(defn circle [i j]
  [:circle
   {:r 0.35
    :stroke "blue"
    :stroke-width 0.09
    :fill "none"
    :cx (+ 0.5 i)
    :cy (+ 0.5 j)}])

;graphic representation of cross for the board 
(defn cross [i j]
  [:g {:stroke "darkred"
       :stroke-width 0.4
       :transform
       (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") "
            "scale(0.3)")}
   [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
   [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])

;creates board and DOM
(defn tictactoe []
  [:center
   [:h1 (:text @app-state)]
   ;display states of the game
   [:h2 (case (:game-status @app-state)
      :player-victory "It's a win."
      :computer-victory "You lose."
      :draw "Draw. "
      "")]
   [:h2
    [:button
     {:on-click
      (fn new-game-click [e]
        (swap! app-state assoc
               :board (new-board 3)
               :game-status :in-progress))}
     "Play again."]]
   (into
    [:svg
     {:view-box (str "0 0 " 3 " " 3)
      :width 500
      :height 500}]
    (for [i (range 3)
          j (range 3)]
      (case (get-in @app-state [:board j i])
        ;blank space flag
        "V" [blank i j]
        ;player flag
        "P" [circle i j]
        ;computer flag
        "C" [cross i j]))
        )])

(reagent/render-component [tictactoe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  (prn (:board @app-state)))
