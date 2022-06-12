package kr.clean.reactblog

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ReactBlogApplication

fun main(args: Array<String>) {
    runApplication<ReactBlogApplication>(*args)
}
