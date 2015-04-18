// ---------------------------------------------------------------------------
// <copyright file="SearchFilter.IsGreaterThan.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the IsGreaterThan class.</summary>
//-----------------------------------------------------------------------

namespace Microsoft.Exchange.WebServices.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <content>
    /// Contains nested type SearchFilter.IsGreaterThan.
    /// </content>
    public abstract partial class SearchFilter
    {
        /// <summary>
        /// Represents a search filter that checks if a property is greater than a given value or other property.
        /// </summary>
        public sealed class IsGreaterThan : RelationalFilter
        {
            /// <summary>
            /// Initializes a new instance of the <see cref="IsGreaterThan"/> class.
            /// </summary>
            public IsGreaterThan()
                : base()
            {
            }

            /// <summary>
            /// Initializes a new instance of the <see cref="IsGreaterThan"/> class.
            /// </summary>
            /// <param name="propertyDefinition">The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)</param>
            /// <param name="otherPropertyDefinition">The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)</param>
            public IsGreaterThan(PropertyDefinitionBase propertyDefinition, PropertyDefinitionBase otherPropertyDefinition)
                : base(propertyDefinition, otherPropertyDefinition)
            {
            }

            /// <summary>
            /// Initializes a new instance of the <see cref="IsGreaterThan"/> class.
            /// </summary>
            /// <param name="propertyDefinition">The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)</param>
            /// <param name="value">The value to compare the property with.</param>
            public IsGreaterThan(PropertyDefinitionBase propertyDefinition, object value)
                : base(propertyDefinition, value)
            {
            }

            /// <summary>
            /// Gets the name of the XML element.
            /// </summary>
            /// <returns>XML element name.</returns>
            internal override string GetXmlElementName()
            {
                return XmlElementNames.IsGreaterThan;
            }
        }
    }
}