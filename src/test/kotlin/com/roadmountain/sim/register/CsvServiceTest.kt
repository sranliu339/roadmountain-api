package com.roadmountain.sim.register

import com.nhaarman.mockitokotlin2.any
import com.nhaarman.mockitokotlin2.given
import com.roadmountain.sim.domain.entity.Customer
import com.roadmountain.sim.domain.enum.CustomerSuffix
import com.roadmountain.sim.repository.CustomerRepository
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
    lateinit var repository: CustomerRepository
    @Spy
    val clock: Clock = Clock.fixed(Instant.parse("2010-10-10T10:10:10Z"), ZoneOffset.UTC)

    @Test
    fun testCreateCsvString() {
        // Prepare
        given(repository.findByCreatedBetween(any()))
            .willReturn(
                listOf(
                    Customer(
                        vendorCode = "testVendorCode",
                        suffix = CustomerSuffix.MISS,
                        firstName = "testFirstName",
                        middleName = "testMiddleName",
                        lastName = "testLastName",
                        simNo = "testSimNo",
                        passportNo = "testPassportNo",
                        passportExpiry = LocalDate.parse("2010-11-10"),
                        passportCountry = "testPassportCountry",
                        address = "testAddress",
                        dateOfBirth = LocalDate.parse("2010-10-10"),
                        email = "testEmail",
                        brand = "testBrand",
                        plan = "testPlan"
                    )
                )
            )

        // Do
        val actual = target.createCsvString()

        // Verify
        val expected = buildString {
            // title
            append("Vendor Code,Suffix,First Name,Middle Name,Last Name,")
            append("SIM No,Passport No,Passport Expiry,Passport Country,")
            append("Address in Australia,Date of Birth,Email(Optional),Brand,Plan(\$)\n")

            // rows
            append("testVendorCode,MISS,testFirstName,testMiddleName,testLastName,")
            append("testSimNo,testPassportNo,10/11/2010,testPassportCountry,")
            append("testAddress,10/10/2010,testEmail,testBrand,testPlan\n")
        }
        assertThat(actual).isEqualTo(expected)
    }

    @Test
    fun `test createCsvString() with empty list`() {
        given(repository.findByCreatedBetween(any())).willReturn(emptyList())

        val actual = target.createCsvString()

        assertThat(actual).isNull()
    }
}