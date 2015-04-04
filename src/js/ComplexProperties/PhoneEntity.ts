// ---------------------------------------------------------------------------
// <copyright file="PhoneEntity.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the PhoneEntity class.</summary>
//-----------------------------------------------------------------------

namespace Microsoft.Exchange.WebServices.Data
{
    using System;
    using System.IO;

    /// <summary>
    /// Represents an PhoneEntity object.
    /// </summary>
    public sealed class PhoneEntity : ExtractedEntity
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PhoneEntity"/> class.
        /// </summary>
        internal PhoneEntity()
            : base()
        {
        }

        /// <summary>
        /// Gets the phone entity OriginalPhoneString.
        /// </summary>
        public string OriginalPhoneString { get; internal set; }

        /// <summary>
        /// Gets the phone entity PhoneString.
        /// </summary>
        public string PhoneString { get; internal set; }

        /// <summary>
        /// Gets the phone entity Type.
        /// </summary>
        public string Type { get; internal set; }

        /// <summary>
        /// Tries to read element from XML.
        /// </summary>
        /// <param name="reader">The reader.</param>
        /// <returns>True if element was read.</returns>
        internal override bool TryReadElementFromXml(EwsServiceXmlReader reader)
        {
            switch (reader.LocalName)
            {
                case XmlElementNames.NlgOriginalPhoneString:
                    this.OriginalPhoneString = reader.ReadElementValue();
                    return true;

                case XmlElementNames.NlgPhoneString:
                    this.PhoneString = reader.ReadElementValue();
                    return true;

                case XmlElementNames.NlgType:
                    this.Type = reader.ReadElementValue();
                    return true;

                default:
                    return base.TryReadElementFromXml(reader);
            }
        }
    }
}
