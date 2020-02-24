package com.roadmountain.sim.domain.entity

import com.roadmountain.sim.domain.enum.CustomerSuffix
import org.springframework.data.annotation.Id
import java.time.Instant
import java.time.LocalDate

data class Registration(
    @field:Id
    private val _id: String? = null,
    val suffix: CustomerSuffix,
    val simNo: String,
    val passportCountry: String,
    val dateOfBirth: LocalDate,
    val brand: String,
    val plan: String,
    val privacy: RegistrationPrivacy?,
    val created: Instant = Instant.now()
) {
    val id: String
        get() {
            return checkNotNull(_id)
        }

    data class RegistrationPrivacy(
        val firstName: String,
        val middleName: String?,
        val lastName: String,
        val passportNo: String,
        val passportExpiry: LocalDate,
        val address: String,
        val email: String
    )
}