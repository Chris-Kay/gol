(ns clojure-kata.core-test
  (:require [clojure.test :refer :all]
            [clojure-kata.core :refer :all]))

(deftest test-cell-should-survive
  (testing "Underpopulation"
    (is (not (cell-should-survive 0)))
    (is (not (cell-should-survive 1)))))
