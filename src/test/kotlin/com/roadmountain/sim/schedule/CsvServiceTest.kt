package com.roadmountain.sim.schedule

import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.given
import com.roadmountain.sim.domain.entity.Registration
import com.roadmountain.sim.domain.entity.Registration.RegistrationPrivacy
import com.roadmountain.sim.domain.enum.CustomerSuffix
import com.roadmountain.sim.repository.RegistrationRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Spy
import org.mockito.junit.jupiter.MockitoExtension
import java.time.Clock
import java.time.Instant
import java.time.LocalDate
import java.time.ZoneOffset

@ExtendWith(MockitoExtension::class)
open class CsvServiceTest {
    @InjectMocks
    lateinit var target: CsvService
    @Mock
    lateinit var repository: RegistrationRepository
    @Spy
    val clock: Clock = Clock.fixed(Instant.parse("2010-10-10T10:10:10Z"), ZoneOffset.UTC)

    @Test
    fun testCreateCsvFile() {
        // Prepare
        given(repository.findByCreatedBetween(any()))
            .willReturn(
                listOf(
                    Registration(
                        suffix = CustomerSuffix.MISS,
                        simNo = "testSimNo",
                        passportCountry = "jp",
                        dateOfBirth = LocalDate.parse("2010-10-10"),
                        brand = "testBrand",
                        plan = "testPlan",
                        privacy = RegistrationPrivacy(
                            firstName = "testFirstName",
                            middleName = "testMiddleName",
                            lastName = "testLastName",
                            passportNo = "testPassportNo",
                            passportExpiry = LocalDate.parse("2010-11-10"),
                            address = "ABC street, test hotel\"",
                            email = "testEmail"
                        )
                    ),
                    Registration(
                        suffix = CustomerSuffix.MISS,
                        simNo = "testSimNo",
                        passportCountry = "jp",
                        dateOfBirth = LocalDate.parse("2010-10-10"),
                        brand = "testBrand",
                        plan = "testPlan",
                        privacy = RegistrationPrivacy(
                            firstName = "testFirstName",
                            middleName = "testMiddleName",
                            lastName = "testLastName",
                            passportNo = "testPassportNo",
                            passportExpiry = LocalDate.parse("2010-11-10"),
                            address = "ABC street, test hotel\"",
                            email = "testEmail"
                        )
                    )
                )
            )

        // Do
        val actual = target.createCsvFile()

        // Verify
        assertThat(actual?.exists()).isTrue()
    }

    @Test
    fun `test createCsvFile() with empty list`() {
        given(repository.findByCreatedBetween(any())).willReturn(emptyList())

        val actual = target.createCsvFile()

        assertThat(actual).isNull()
    }
}